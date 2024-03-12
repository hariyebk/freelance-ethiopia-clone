import {formatDate, formatDistance, parseISO} from "date-fns"

export function formatDateString(date: string){
    if(!date) return
    const day = new Date(date)
    const formattedDate = day.toLocaleDateString('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric"
    })
    return formattedDate
}
export function formatDistanceFromNow(date: string | undefined){
    if(!date) return
    return formatDistance(parseISO(date), new Date(), {
        addSuffix: true,
    }).replace('about ', '').replace('in', 'In');
}
// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export function changeDateFromIsoToNormal(date: string){
    if(!date) return
    const day = new Date(date);
    return formatDate(day, 'yyyy-MM-dd HH:mm:ss')
}
export function calculateAge(date: string | undefined){
    if(!date) return
    const thisYear = new Date().getFullYear()
    const usersBirthYear = new Date(date).getFullYear()
    return thisYear - usersBirthYear
}
// A function that returns all the search parameters in the current url
export function getAllQueryStrings() {
    const queryParams = new URLSearchParams(window.location.search);
    const queryStringObj: {[key: string]: string} = {};
    for (const [key, value] of queryParams.entries()) {
        queryStringObj[key] = value === "On_site" ? value : value.replace(/_/g, " ")
    }
    return queryStringObj
}