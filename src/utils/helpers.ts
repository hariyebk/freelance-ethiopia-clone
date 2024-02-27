import {formatDistance, parseISO} from "date-fns"

export function formatDateString(date: string){
    if(!date) return
    const day = new Date(date)
    const formattedDate = day.toLocaleDateString('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric"
    })
    console.log(formattedDate)
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
    const today = new Date(date);
    // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
    today.setUTCHours(0, 0, 0, 0);
    return today.toISOString();
}