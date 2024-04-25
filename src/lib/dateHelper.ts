const formatDate = (dateAsString: string): string => {
    const date = new Date(dateAsString);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options);
};

export default formatDate;
