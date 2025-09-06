// Function to format numbers in Indian numbering system
export const formatIndianNumber = (amount) => {
    return amount.toLocaleString("en-IN");
}

export const formatDateAndTime = (createdAt) => {
    const dateObj = new Date(createdAt);
    const formattedTime = dateObj.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const formattedDate = dateObj.toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' });
    return `${formattedDate}, ${formattedTime}`;
}