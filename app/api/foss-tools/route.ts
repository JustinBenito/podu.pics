import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const jsonFilePath = join(process.cwd(), 'data', 'foss-tools.json');
    const jsonContent = readFileSync(jsonFilePath, 'utf-8');
    const data = JSON.parse(jsonContent);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading FOSS tools:', error);
    return NextResponse.json(
      { error: 'Failed to load FOSS tools' },
      { status: 500 }
    );
  }
}
