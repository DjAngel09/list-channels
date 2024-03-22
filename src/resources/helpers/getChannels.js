import { generateDateFrom } from "./generateDateFrom";

export const getChannels = async () => {

    //

    const {dateFor, dateTo} = generateDateFrom();

    try {

        const response = await fetch(`${process.env.REACT_APP_API_URL}&date_from=${dateFor}&date_to=${dateTo}&quantity=200`);
        const data = await response.json();

        return data

    } catch (err) {
        return err
    }

}