import type { Metadata } from 'next'
import '../globals.css'
import { GradientBackground } from '@/components/quoteGenerator/quote-generatror-elements'

export const metadata: Metadata = {
	title: 'QuoteFek',
	description: 'Quotes muh pe fekta hai',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<GradientBackground>{children}</GradientBackground>
			</body>
		</html>
	)
}
