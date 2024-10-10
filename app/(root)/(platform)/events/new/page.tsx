import { EventForm } from "../_components/event-form";

const CreateEventPage = () => {
    return (
        <section className="space-y-6">
            <h3 className="text-3xl font-bold">Create an event</h3>
            <EventForm />
        </section>
    );
};

export default CreateEventPage;
