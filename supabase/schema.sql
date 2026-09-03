create table profiles(id uuid primary key references auth.users(id) on delete cascade,full_name text,currency text not null default 'MVR',created_at timestamptz default now()); create table transactions(id uuid primary key default gen_random_uuid(),user_id uuid references auth.users(id) on delete cascade,type text check(type in('income','expense')),amount numeric(14,2) check(amount>0),description text,category text default 'Other',occurred_at date default current_date,created_at timestamptz default now()); create table budgets(id uuid primary key default gen_random_uuid(),user_id uuid references auth.users(id) on delete cascade,category text,amount numeric(14,2),month date,created_at timestamptz default now()); create table savings_goals(id uuid primary key default gen_random_uuid(),user_id uuid references auth.users(id) on delete cascade,name text,target_amount numeric(14,2),current_amount numeric(14,2) default 0,target_date date,created_at timestamptz default now()); alter table profiles enable row level security; alter table transactions enable row level security; alter table budgets enable row level security; alter table savings_goals enable row level security; create policy profiles_own on profiles for all using(auth.uid()=id) with check(auth.uid()=id); create policy transactions_own on transactions for all using(auth.uid()=user_id) with check(auth.uid()=user_id); create policy budgets_own on budgets for all using(auth.uid()=user_id) with check(auth.uid()=user_id); create policy goals_own on savings_goals for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
create table if not exists bills (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references auth.users(id) on delete cascade not null,
 merchant text,
 invoice_number text,
 bill_date date,
 subtotal numeric(14,2),
 gst_amount numeric(14,2),
 total_amount numeric(14,2),
 currency text default 'MVR',
 category text default 'Other',
 image_path text,
 ocr_text text,
 created_at timestamptz default now()
);
create table if not exists tax_reports (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references auth.users(id) on delete cascade not null,
 tax_type text check(tax_type in ('GST_GENERAL','GST_TOURISM','INCOME_TAX')),
 period_start date,
 period_end date,
 taxable_sales numeric(14,2) default 0,
 zero_rated_sales numeric(14,2) default 0,
 exempt_sales numeric(14,2) default 0,
 out_of_scope_sales numeric(14,2) default 0,
 output_tax numeric(14,2) default 0,
 input_tax numeric(14,2) default 0,
 tax_payable numeric(14,2) default 0,
 currency text default 'MVR',
 status text default 'draft',
 created_at timestamptz default now()
);
alter table bills enable row level security;
alter table tax_reports enable row level security;
create policy bills_own on bills for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
create policy tax_reports_own on tax_reports for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
