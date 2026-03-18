import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import type { Metadata } from "next";

// Hardcoded blog data (frontend-only, no DB)
const blogPosts: Record<string, {
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    keywords: string[];
    contentHtml: string;
    mockup: string;
}> = {
    "digital-hostel-management-transforming-universities": {
        title: "How Digital Hostel Management Systems Are Transforming Universities",
        description: "Universities across the world are moving from manual hostel operations to digital management platforms. Automating room allotment, payments, and student records helps institutions reduce administrative workload and improve transparency.",
        date: "2026-03-15",
        author: "Nest n Wings Team",
        category: "Industry Trends",
        readTime: "5 min",
        keywords: ["hostel management software", "student accommodation management", "university hostel automation"],
        contentHtml: `
            <h2>The Shift from Manual to Digital</h2>
            <p>For decades, universities managed hostels using paper ledgers, manual room allocation charts, and spreadsheets. This approach worked when campuses housed a few hundred students, but as institutions grow to accommodate thousands, the cracks become impossible to ignore.</p>
            <p>Digital hostel management platforms automate the most time-consuming administrative tasks: room allocation, fee collection, attendance tracking, and maintenance requests. The result is a dramatic reduction in errors, faster decision-making, and a transparent system that benefits both administrators and students.</p>

            <h2>Key Benefits of Digital Transformation</h2>
            <h3>1. Automated Room Allotment</h3>
            <p>Instead of manually matching students to rooms — a process prone to errors, bias, and hours of administrative effort — digital systems use rule-based algorithms. These consider student preferences, year of study, department, and even special requirements to produce optimal allocations in seconds.</p>

            <h3>2. Centralized Payment Tracking</h3>
            <p>Late fee payments and missing records are a constant headache for hostel administrators. Digital platforms provide real-time dashboards showing who has paid, who hasn't, and automatically send reminders. Integrated payment gateways allow students to pay online, reducing cash handling and reconciliation efforts.</p>

            <h3>3. Real-Time Occupancy Insights</h3>
            <p>Knowing exactly how many rooms are occupied, vacant, or under maintenance at any given moment is critical for planning. Digital dashboards provide this information in real-time, enabling better capacity planning and resource allocation.</p>

            <h3>4. Streamlined Maintenance Workflows</h3>
            <p>Students can log maintenance requests through a portal, and administrators can track, assign, and resolve tickets systematically. No more lost requests or forgotten repairs.</p>

            <h2>The Road Ahead</h2>
            <p>As universities continue to grow and compete for students, the quality of hostel experience becomes a differentiator. Institutions that adopt modern hostel management platforms will find themselves better equipped to handle scale, improve student satisfaction, and reduce operational costs.</p>
            <p>The future of university hostel management is digital, automated, and student-centric. The question is no longer <em>whether</em> to adopt technology, but <em>how quickly</em> you can implement it.</p>
        `,
        mockup: "blog1",
    },
    "top-challenges-hostel-management-technology": {
        title: "Top Challenges in Hostel Management and How Technology Solves Them",
        description: "Managing hostels manually often leads to room allocation errors, payment delays, and operational confusion. Modern hostel management platforms simplify these tasks through automation and centralized dashboards.",
        date: "2026-03-10",
        author: "Nest n Wings Team",
        category: "Solutions",
        readTime: "4 min",
        keywords: ["hostel management problems", "hostel administration software", "student housing technology"],
        contentHtml: `
            <h2>Common Challenges in Hostel Operations</h2>
            <p>Hostel management, whether at universities, co-living spaces, or working professional hostels, involves coordinating dozens of moving parts. When done manually, several recurring problems emerge:</p>

            <h3>1. Room Allocation Chaos</h3>
            <p>Without a structured system, room allocation becomes a first-come-first-served scramble that often leads to disputes, over-booking, and underutilization of available capacity. Manual allocation also makes it nearly impossible to factor in preferences or special requirements systematically.</p>

            <h3>2. Payment Tracking Nightmares</h3>
            <p>Tracking payments across hundreds or thousands of residents using spreadsheets is error-prone and time-consuming. Late payments slip through the cracks, receipts get lost, and reconciliation at the end of each month becomes a dreaded task.</p>

            <h3>3. Communication Breakdowns</h3>
            <p>Notices, policy changes, and emergency communications sent via physical notice boards or WhatsApp groups are easily missed. There's no way to confirm who received and acknowledged critical information.</p>

            <h3>4. Maintenance Request Black Holes</h3>
            <p>Students report issues verbally or through informal channels. Without a tracking system, requests are forgotten, duplicated, or deprioritized without transparency.</p>

            <h2>How Technology Solves These Problems</h2>
            <p>Modern hostel management platforms address each of these pain points with purpose-built modules:</p>

            <ul>
                <li><strong>Smart Allocation Engines</strong> use rule-based logic to automatically assign rooms, respecting preferences and constraints.</li>
                <li><strong>Integrated Payment Systems</strong> offer online payments, automated reminders, and real-time collection dashboards.</li>
                <li><strong>Centralized Communication</strong> ensures every resident receives and acknowledges important notices through the platform.</li>
                <li><strong>Ticketing Systems</strong> for maintenance requests provide transparency and accountability for every issue raised.</li>
            </ul>

            <h2>Choosing the Right Platform</h2>
            <p>Not all hostel management solutions are created equal. Look for platforms that offer modular design (so you can start small and scale), intuitive interfaces (so staff adoption is easy), and strong reporting capabilities (so you can make data-driven decisions).</p>
            <p>The best platforms don't just digitize existing processes — they reimagine them for efficiency, transparency, and scale.</p>
        `,
        mockup: "blog2",
    },
};

export async function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        return { title: "Post Not Found | Nest n Wings Blog" };
    }

    return {
        title: `${post.title} | Nest n Wings`,
        description: post.description,
        keywords: post.keywords,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    const postData = {
        id: slug,
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        category: post.category,
        readTime: post.readTime,
        contentHtml: post.contentHtml,
        mockup: post.mockup,
    };

    // Get other posts for "Keep Reading"
    const otherPosts = Object.entries(blogPosts)
        .filter(([s]) => s !== slug)
        .map(([s, p]) => ({
            id: s,
            title: p.title,
            description: p.description,
            date: p.date,
            category: p.category,
            mockup: p.mockup,
        }));

    return <BlogPostClient postData={postData} allPosts={otherPosts} />;
}
