'use client'
import { useState } from 'react'
import {
	BackgroundImage1,
	BackgroundImage2,
	FooterContainer,
	FooterLink,
	GenerateQuoteButton,
	GenerateQuoteButtonText,
	QuoteGeneratorContainer,
	QuoteGeneratorInnerContainer,
	QuoteGeneratorSubTitle,
	QuoteGeneratorTitle,
} from '@/components/quoteGenerator/quote-generatror-elements'

export default function Home() {
	const [numberOfQuotes, setNumberOfQuotes] = useState<number | null>(0)

	return (
		<main>
			{/* QuoteGeneratorModal */}
			{/* <QuoteGeneratorModal /> */}

			{/* Quote Generator */}

			<QuoteGeneratorContainer>
				<QuoteGeneratorInnerContainer>
					<QuoteGeneratorTitle>Quote Generator</QuoteGeneratorTitle>
					<QuoteGeneratorSubTitle>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aperiam minus et esse similique perspiciatis maxime
						voluptate ipsam molestias. Itaque ea temporibus, cum
						vitae consectetur fugiat ad quis amet blanditiis nisi
						excepturi dolore alias.
					</QuoteGeneratorSubTitle>
					<GenerateQuoteButton onClick={() => {}}>
						<GenerateQuoteButtonText>
							Make a Quote
						</GenerateQuoteButtonText>
					</GenerateQuoteButton>
				</QuoteGeneratorInnerContainer>
			</QuoteGeneratorContainer>

			{/* background images */}
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

			{/* footer */}
			<FooterContainer>
				Quotes Generated {numberOfQuotes}
				<br />
				Developed with POWER IN HIS HANDS by{' '}
				<FooterLink
					href={'https://www.instagram.com/shivam_27k/'}
					target="_blank"
					rel="noopener noreferrer"
				>
					@shivam27k
				</FooterLink>
			</FooterContainer>
		</main>
	)
}
