'use client'
import { useState } from 'react';
import Card from './Card';
import { cars, locations } from './data/data'
import { Montserrat } from 'next/font/google';

const karla = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const [selected, setSelected] = useState("all");
  console.log(cars);

  return (
    <main className="min-h-screen ">
      <div className={`${karla.className} w-100 text-center`}>Locations</div>
      <div className="flex justify-center">
        <select name="locations"
          id="locations"
          value={selected}
          onChange={e => setSelected(e.target.value)}>
          <option key="0">all</option>
          {locations.map((location, index) => {
            return <option key={location.location_id}>{location.name}</option>
          })}
        </select>
      </div>


      <div className="flex flex-wrap justify-around ">
        {cars.map((car) => {
          if (car.location == selected || selected == "all") {
            return <Card model={car.model} rate={car.rate} key={car.car_id} />
          }
          return <></>;
        })}
      </div>
    </main>
  );
}
