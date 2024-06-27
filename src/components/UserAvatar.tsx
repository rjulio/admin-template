import Link from 'next/link';

import useAuthContext from '@/data/hooks/useAuthContext';

interface UserAvatarProps {
	className?: string;
}

export default function UserAvatar(props: UserAvatarProps) {
	const { user } = useAuthContext();

	return (
		<Link href="/profile">
			<img 
				src={ user?.imageUrl ?? '/images/avatar.svg' } 
				alt="user avatar"
				className={`
					h-8 w-8 rounded-full cursor-pointer
					${props.className}
				`} />
		</Link>
	);
}