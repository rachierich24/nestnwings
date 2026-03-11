import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@nestnwings.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'nestadmin123';

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Create or update the admin user
    const user = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {
            password: hashedPassword,
            role: 'ADMIN'
        },
        create: {
            email: adminEmail,
            password: hashedPassword,
            role: 'ADMIN'
        }
    });

    console.log(`Admin user seeded successfully.`);
    console.log(`Email: ${user.email}`);
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
