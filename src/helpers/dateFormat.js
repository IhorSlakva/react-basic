import { formatDistanceToNow } from 'date-fns';

export const dateFormat = (data) => {
    return formatDistanceToNow(new Date(data), { addSuffix: true })
}