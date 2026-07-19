import Header from "./Header";
import TravelCard from "./TravelCard";
import travelData from "./TravelData";

export default function TravelToWorldPage() {
    const cards = travelData.map(place => {
         return (
            <TravelCard
                key={place.id}
                place={place}
            />
            )})
 return (

        <>
        <Header />

            <main>
               {cards}
            </main>
        </>
       )

}