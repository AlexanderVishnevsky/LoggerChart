import { NextRequest, NextResponse } from 'next/server';

import handler from '@/server/modules/uploadCsvFile';

export default async function uploadCsv(req: NextRequest, res: NextResponse) {
    await handler(req, res, '/events');
}
