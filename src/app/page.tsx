/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useState } from "react";

type TicketType = {
  VIP: number[];
  General: number[];
  Economy: number[];
};

export default function Home() {
  const [selectedTicket, setSelectedTicket] = useState<TicketType>({
    VIP: [],
    General: [],
    Economy: [],
  });

  const [maxTicket, setMaxTicket] = useState(0);

  const TotalTickets = {
    VIP: 24,
    General: 36,
    Economy: 64,
  };

  const bookTickets = (ticketType: keyof TicketType, ticketNumber: number) => {
    if (maxTicket >= 5) {
      alert("You can only book 5 tickets at a time");
      return;
    }
    setSelectedTicket((prev) => ({
      ...prev,
      [ticketType]: [...prev[ticketType], ticketNumber],
    }));
    setMaxTicket(maxTicket + 1);
  };

  return (
    <div className="flex flex-col gap-10 w-full  justify-center items-center py-10">
      {/* VIP Tickets  */}
      <div className="flex flex-col justify-center gap-4">
        <p className="w-full text-center">VIP Tickets</p>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: TotalTickets.VIP }).map((_, index) => {
            return (
              <div
                key={index}
                className={`border p-4 flex justify-center items-center  cursor-pointer ${
                  selectedTicket.VIP.includes(index + 1)
                    ? "bg-pink-500"
                    : "bg-green-500"
                }`}
                onClick={() => bookTickets("VIP", index + 1)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
      {/* General Tickets*/}
      <div className="flex flex-col justify-center gap-4">
        <p className="w-full text-center">General Tickets</p>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: TotalTickets.General }).map((_, index) => {
            return (
              <div
                key={index}
                className={`border p-4 flex justify-center items-center cursor-pointer ${
                  selectedTicket.General.includes(index + 1)
                    ? "bg-pink-500"
                    : "bg-green-500"
                }`}
                onClick={() => bookTickets("General", index + 1)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
      {/* Economy Tickets  */}
      <div className="flex flex-col justify-center gap-4">
        <p className="w-full text-center">Economy Tickets</p>
        <div className="grid grid-cols-8 gap-4">
          {Array.from({ length: TotalTickets.Economy }).map((_, index) => {
            return (
              <div
                key={index}
                className={`border p-4 flex justify-center items-center cursor-pointer ${
                  selectedTicket.Economy.includes(index + 1)
                    ? "bg-pink-500"
                    : "bg-green-500"
                }`}
                onClick={() => bookTickets("Economy", index + 1)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="flex flex-col">
        {[...Array(5)].map((_, index) => {
          return (
            <div key={index} className="flex">
              {[...Array(5)].map((_, indexB) => {
                return (
                  <div key={indexB} className="p-4 border border-pink-500">
                    {indexB + 1}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div> */}

      <button
        className="border px-8 py-2 rounded-md bg-orange-500 text-white"
        onClick={() =>
          alert(
            `You have booked VIP:${selectedTicket.VIP}, General:${selectedTicket.General}, Economy:${selectedTicket.Economy}`
          )
        }
      >
        Book Tickets
      </button>
    </div>
  );
}
