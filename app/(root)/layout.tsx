import type { Metadata } from 'next'
import '../globals.css'
import { GradientBackground } from '@/components/quoteGenerator/quote-generatror-elements'
import { Amplify } from 'aws-amplify'
import awsmobile from '../../src/aws-exports'
import { ResourcesConfig } from 'aws-amplify'

interface CustomAmplifyConfig extends ResourcesConfig {
	ssr?: boolean
}

const customConfig: CustomAmplifyConfig = {
	...awsmobile,
	ssr: true,
}

Amplify.configure(customConfig)

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
