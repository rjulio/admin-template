import Head from 'next/head';
import router from 'next/router';

import useAuthContext from '@/data/hooks/useAuthContext';

export default function ForceAuth(jsx) {

	const { user, loading } = useAuthContext();

	function renderContent() {
		return (
			<>
				<Head>
					<script dangerouslySetInnerHTML={{
						__html: `
							if (!document.cookie?.includes('admin-template-auth')) {
								window.location.href = '/authentication';
							}
						`
					}} />
				</Head>
				{ jsx }
			</>
		);
	}

	function renderLoading() {
		return (
			<div className={`
				flex justify-center items-center h-screen
			`}>
				<img 
					src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3JreHFya2trYnJ4b2wxaHo4aTduOWFwdTFhYXg0enRzNXV1aDdscCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JFTg9PBtHZz9hHRkBN/giphy.gif" />
			</div>
		);
	}

	if (!loading && user?.email) {
		return renderContent();
	} else if (loading) {
		return renderLoading();
	} else {
		router.push('authentication');
		return null;
	}
}

