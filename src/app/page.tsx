
import Header from "@/components/ui/Header";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Header /> */}
      <h1 className="text-5xl text-center">Welcome to Tech Trend Emporium</h1>
      <Image
        src="/images/tte-logo.svg"
        alt="TTE Logo"
        width={200}
        height={200}
        //className="rounded-full"
      />
      <p className="text-center">
      the store where the latest technology meets the trendiest fashion! 
      Explore our exclusive collections of cutting-edge electronics, futuristic jewelry, 
      and the latest fashion for men and women. Discover products that blend elegance with innovation. 
      Make shopping a futuristic and stylish experience at TechTrend Emporium!
      </p>
      <Link href="/landing_page">
        <p>Go to Landing Page</p>
      </Link>

    </main>
  );
}
