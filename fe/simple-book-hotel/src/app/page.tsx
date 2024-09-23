import Image from "next/image";
import LandingPage from "@/components/LandingPage";

import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { LuSpade } from "react-icons/lu";
import { FaTableCellsLarge } from "react-icons/fa6";
import { TbWeight } from "react-icons/tb";
import { LuPocket } from "react-icons/lu";
import { LuPresentation } from "react-icons/lu";
import { LuConciergeBell } from "react-icons/lu";
import { FaMountain } from "react-icons/fa";

export default function Home() {
  return (
    <div>
        <LandingPage/>
    </div>
    // <div className="flex flex-col min-h-[100dvh]">
    //   <header className="px-4 lg:px-6 h-14 flex items-center">
    //     <Link href="#" className="flex items-center justify-center" prefetch={false}>
    //       <FaMountain className="h-6 w-6" />
    //       <span className="sr-only">Luxury Hotel</span>
    //     </Link>
    //     <nav className="ml-auto flex gap-4 sm:gap-6">
    //       <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
    //         Rooms
    //       </Link>
    //       <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
    //         Amenities
    //       </Link>
    //       <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
    //         Testimonials
    //       </Link>
    //       <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
    //         Contact
    //       </Link>
    //     </nav>
    //   </header>
    //   <main className="flex-1">
    //     <section className="w-full h-[70dvh] relative">
    //       <img
    //         src="/placeholder.svg"
    //         alt="Hero"
    //         className="w-full h-full object-cover"
    //         width="1920"
    //         height="1080"
    //         style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
    //       />
    //       <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    //         <div className="text-center space-y-4 max-w-2xl px-4">
    //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Discover Luxury at Its Finest</h1>
    //           <p className="text-lg sm:text-xl text-white">
    //             Experience the epitome of elegance and comfort at our world-class hotel. Indulge in our exquisite
    //             accommodations, exceptional service, and unparalleled amenities.
    //           </p>
    //           <Link
    //             href="#"
    //             className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //             prefetch={false}
    //           >
    //             Explore Rooms
    //           </Link>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="rooms" className="w-full py-12 md:py-24 lg:py-32">
    //       <div className="container px-4 md:px-6">
    //         <div className="space-y-4 mb-8">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Luxurious Accommodations</h2>
    //           <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //             Discover our exquisite selection of rooms and suites, each designed to provide the ultimate in comfort
    //             and sophistication.
    //           </p>
    //         </div>
    //         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    //           <div className="flex flex-col bg-card rounded-lg overflow-hidden">
    //             <img
    //               src="/placeholder.svg"
    //               alt="Room 1"
    //               className="w-full h-[300px] object-cover"
    //               width="600"
    //               height="400"
    //               style={{ aspectRatio: "600/400", objectFit: "cover" }}
    //             />
    //             <div className="p-6 space-y-4">
    //               <h3 className="text-2xl font-bold">Deluxe Room</h3>
    //               <p className="text-muted-foreground">
    //                 Indulge in our spacious Deluxe Rooms, featuring luxurious bedding, stunning city views, and all the
    //                 modern amenities you desire.
    //               </p>
    //               <Link
    //                 href="#"
    //                 className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //                 prefetch={false}
    //               >
    //                 Book Now
    //               </Link>
    //             </div>
    //           </div>
    //           <div className="flex flex-col bg-card rounded-lg overflow-hidden">
    //             <img
    //               src="/placeholder.svg"
    //               alt="Room 2"
    //               className="w-full h-[300px] object-cover"
    //               width="600"
    //               height="400"
    //               style={{ aspectRatio: "600/400", objectFit: "cover" }}
    //             />
    //             <div className="p-6 space-y-4">
    //               <h3 className="text-2xl font-bold">Suite</h3>
    //               <p className="text-muted-foreground">
    //                 Experience the epitome of luxury in our spacious Suites, featuring separate living and sleeping
    //                 areas, a private balcony, and top-of-the-line amenities.
    //               </p>
    //               <Link
    //                 href="#"
    //                 className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //                 prefetch={false}
    //               >
    //                 Book Now
    //               </Link>
    //             </div>
    //           </div>
    //           <div className="flex flex-col bg-card rounded-lg overflow-hidden">
    //             <img
    //               src="/placeholder.svg"
    //               alt="Room 3"
    //               className="w-full h-[300px] object-cover"
    //               width="600"
    //               height="400"
    //               style={{ aspectRatio: "600/400", objectFit: "cover" }}
    //             />
    //             <div className="p-6 space-y-4">
    //               <h3 className="text-2xl font-bold">Presidential Suite</h3>
    //               <p className="text-muted-foreground">
    //                 Indulge in the ultimate luxury experience in our Presidential Suite, featuring a private living
    //                 room, dining area, and a lavish bathroom with a jacuzzi tub.
    //               </p>
    //               <Link
    //                 href="#"
    //                 className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //                 prefetch={false}
    //               >
    //                 Book Now
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="amenities" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    //       <div className="container px-4 md:px-6">
    //         <div className="space-y-4 mb-8">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unparalleled Amenities</h2>
    //           <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //             Discover the exceptional amenities that make our hotel the ultimate destination for relaxation and
    //             indulgence.
    //           </p>
    //         </div>
    //         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    //           <div className="flex flex-col items-center text-center space-y-4">
    //             <LuSpade className="h-12 w-12 text-primary" />
    //             <h3 className="text-2xl font-bold">Luxury Spa</h3>
    //             <p className="text-muted-foreground">
    //               Indulge in our world-class spa, offering a range of rejuvenating treatments and therapies to help you
    //               unwind and recharge.
    //             </p>
    //           </div>
    //           <div className="flex flex-col items-center text-center space-y-4">
    //             <FaTableCellsLarge className="h-12 w-12 text-primary" />
    //             <h3 className="text-2xl font-bold">Gourmet Dining</h3>
    //             <p className="text-muted-foreground">
    //               Savor the finest culinary delights at our award-winning restaurants, featuring locally sourced
    //               ingredients and expertly crafted dishes.
    //             </p>
    //           </div>
    //           <div className="flex flex-col items-center text-center space-y-4">
    //             <TbWeight className="h-12 w-12 text-primary" />
    //             <h3 className="text-2xl font-bold">Fitness Center</h3>
    //             <p className="text-muted-foreground">
    //               Stay active during your stay with our state-of-the-art fitness center, equipped with the latest
    //               equipment and personal training services.
    //             </p>
    //           </div>
    //           <div className="flex flex-col items-center text-center space-y-4">
    //             <LuPocket className="h-12 w-12 text-primary" />
    //             <h3 className="text-2xl font-bold">Outdoor Pool</h3>
    //             <p className="text-muted-foreground">
    //               Relax and unwind by our stunning outdoor pool, surrounded by lush gardens and offering breathtaking
    //               views of the city.
    //             </p>
    //           </div>
    //           <div className="flex flex-col items-center text-center space-y-4">
    //             <LuPresentation className="h-12 w-12 text-primary" />
    //             <h3 className="text-2xl font-bold">Event Spaces</h3>
    //             <p className="text-muted-foreground">
    //               Host your next event or meeting in our versatile event spaces, equipped with state-of-the-art
    //               technology and impeccable service.
    //             </p>
    //           </div>
    //           <div className="flex flex-col items-center text-center space-y-4">
    //             <LuConciergeBell className="h-12 w-12 text-primary" />
    //             <h3 className="text-2xl font-bold">Concierge Service</h3>
    //             <p className="text-muted-foreground">
    //               Our dedicated concierge team is here to assist you with arranging any special requests or activities
    //               during your stay.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
    //       <div className="container px-4 md:px-6">
    //         <div className="space-y-4 mb-8">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Guests Say</h2>
    //           <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //             Hear from our satisfied guests and discover why our hotel is the premier choice for discerning
    //             travelers.
    //           </p>
    //         </div>
    //         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    //           <div className="flex flex-col bg-card rounded-lg p-6 space-y-4">
    //             <div className="flex items-center space-x-4">
    //               <Avatar>
    //                 <AvatarImage src="/placeholder-user.jpg" />
    //                 <AvatarFallback>JD</AvatarFallback>
    //               </Avatar>
    //               <div>
    //                 <h4 className="text-lg font-medium">John Doe</h4>
    //                 <p className="text-muted-foreground text-sm">Satisfied Guest</p>
    //               </div>
    //             </div>
    //             <p className="text-muted-foreground">
    //               "The level of service and attention to detail at this hotel\n is truly unparalleled. I've never felt
    //               so pampered and\n relaxed during a hotel stay."
    //             </p>
    //           </div>
    //           <div className="flex flex-col bg-card rounded-lg p-6 space-y-4">
    //             <div className="flex items-center space-x-4">
    //               <Avatar>
    //                 <AvatarImage src="/placeholder-user.jpg" />
    //                 <AvatarFallback>JD</AvatarFallback>
    //               </Avatar>
    //               <div>
    //                 <h4 className="text-lg font-medium">Jane Smith</h4>
    //                 <p className="text-muted-foreground text-sm">Satisfied Guest</p>
    //               </div>
    //             </div>
    //             <p className="text-muted-foreground">
    //               "The rooms are absolutely stunning, and the amenities are\n top-notch. I can't wait to come back and
    //               experience this\n hotel again."
    //             </p>
    //           </div>
    //           <div className="flex flex-col bg-card rounded-lg p-6 space-y-4">
    //             <div className="flex items-center space-x-4">
    //               <Avatar>
    //                 <AvatarImage src="/placeholder-user.jpg" />
    //                 <AvatarFallback>JD</AvatarFallback>
    //               </Avatar>
    //               <div>
    //                 <h4 className="text-lg font-medium">Michael Johnson</h4>
    //                 <p className="text-muted-foreground text-sm">Satisfied Guest</p>
    //               </div>
    //             </div>
    //             <p className="text-muted-foreground">
    //               "This hotel has exceeded all of my expectations. The staff\n are incredibly friendly and attentive,
    //               and the overall\n experience has been truly exceptional."
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    //       <div className="container px-4 md:px-6">
    //         <div className="space-y-4 mb-8 text-center">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
    //           <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
    //             Have any questions or want to book your stay? Our team is here to assist you.
    //           </p>
    //         </div>
    //         <div className="mx-auto w-full max-w-md space-y-2">
    //           <form className="flex flex-col gap-4">
    //             <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
    //             <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
    //             <Textarea placeholder="Message" className="max-w-lg flex-1" />
    //             <Button type="submit">Submit</Button>
    //           </form>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>
  );
}
