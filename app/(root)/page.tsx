import {
	BackgroundImage1,
	BackgroundImage2,
} from '@/components/quoteGenerator/quote-generatror-elements'

export default function Home() {
	return (
		<main>
			<BackgroundImage1
				src={'/assets/images/cloud-and-thunder.png'}
				height={300}
				width={300}
				alt="Cloud and thunder"
			/>
			<BackgroundImage2
				src={'/assets/images/cloudy-weather.png'}
				height={300}
				width={640}
				alt="Cloud and thunder"
			/>
		</main>
	)
}
