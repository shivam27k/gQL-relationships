'use client'
import { useEffect, useState } from 'react'
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
import { generateClient } from 'aws-amplify/api'
import { quotesQueryName } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api-graphql'
// interface for DynamoDb Object

interface UpdateQuoteInfoData {
	id: string
	queryName: string
	quotesGenerated: number
	createdAt: string
	updatedAt: string
}

function isGraphQLResultForQuotesQueryName(
	response: any
): response is GraphQLResult<{
	quotesQueryName: {
		items: [UpdateQuoteInfoData]
	}
}> {
	return (
		response.data &&
		response.data.quotesQueryName &&
		response.data.quotesQueryName.items
	)
}

import { Amplify } from 'aws-amplify'
import config from '../../src/amplifyconfiguration.json'

Amplify.configure(config)

const client = generateClient()

export default function Home() {
	const [numberOfQuotes, setNumberOfQuotes] = useState<number | null>(0)

	const updateQuoteInfo = async () => {
		try {
			const updateQoute = await client.graphql<UpdateQuoteInfoData>({
				query: quotesQueryName,
				variables: {
					queryName: 'LIVE',
				},
			})

			console.log('Response: ', updateQoute)

			if (!isGraphQLResultForQuotesQueryName(updateQoute)) {
				throw new Error('Invalid response frm client')
			}

			if (!updateQoute.data) {
				throw new Error('Invalid response from response.data')
			}

			const numberOfQuotes =
				updateQoute.data?.quotesQueryName?.items[0]?.quotesGenerated

			setNumberOfQuotes(numberOfQuotes)
		} catch (err) {
			console.log('error getting quote data: ', err)
		}
	}

	useEffect(() => {
		updateQuoteInfo()
	}, [])

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
