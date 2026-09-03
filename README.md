# MoneyFlow Full Stack
Next.js + Supabase production-ready starter.

1. Create a Supabase project.
2. Run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local` and add your Supabase URL and publishable key.
4. Run `npm install`.
5. Run `npm run dev`.
6. Deploy the project to Vercel and add the same environment variables.

The landing page, authentication UI, protected dashboard, database schema and RLS policies are included. The dashboard presentation values are demo data until transaction/budget/goal CRUD is wired to the database.


## Maldives tax features
- Tax centre for MIRA 205 (general GST), MIRA 206 (tourism GST) and MIRA 604 income-tax preparation.
- Tax report records are user-owned via RLS.
- Current tax rates/deadlines should be verified against MIRA before filing; the app is a preparation/recordkeeping tool, not a tax-filing service.

## Bill scan
- Mobile camera/file upload UI.
- Secure bill metadata model for merchant, invoice number, date, subtotal, GST, total, category and OCR text.
- Production implementation should store original scans in Supabase Storage and run OCR before saving extracted fields.
