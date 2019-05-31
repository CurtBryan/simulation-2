select * from homes join houser_users
on (homes.user_id = houser_users.user_id)
where user_id=$1;