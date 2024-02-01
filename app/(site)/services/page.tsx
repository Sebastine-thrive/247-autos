import Image from 'next/image';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services",
};


export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> 
        <p> Welcome to 24-7 Autos</p>
      </div>
    </main>
  );
}
