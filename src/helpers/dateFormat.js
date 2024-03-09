import { formatDistanceToNow, format } from 'date-fns';

export const dateFormat = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const dateFormat2 = data => {
  return format(new Date(data), 'Pp');
};
