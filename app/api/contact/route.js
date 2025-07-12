import dbConnect from "@/lib/mongodb";
import Contact from "@/models/User"; // Rename from userModel for clarity

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        console.log("📥 Incoming contact data:", body); // Debug log

        const contact = await Contact.create(body);
        if (!contact) {
            return Response.json({ success: false, message: "Invalid data" }, { status: 400 });
        }

        return Response.json({ success: true, contact }, { status: 201 });
    } catch (error) {
        console.error("❌ API Error:", error); // 👈 Important for debugging
        return Response.json({ success: false, message: error.message }, { status: 500 });
    }
}
