import { LocationList } from "./_components/venue-list";

const VenuesPage = () => {
    return (
        <section className="container mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
            <LocationList />
        </section>
    );
};

export default VenuesPage;
