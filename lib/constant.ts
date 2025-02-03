export const eventFormDefaultValues = {
    name: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    locationId: "",
    image: "",
    tickets: [
        {
            type: "General Admission",
            price: 0,
            quantity: 0,
            startSale: new Date(),
            endSale: new Date(),
        },
    ],
};

export const venueFormDefaultValues = {
    name: "",
    location: "",
    capacity: 0,
};
