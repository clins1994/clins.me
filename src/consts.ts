import { FIRST_NAME, LAST_NAME } from '../astro.config.mjs'

export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`
export const SITE_DESCRIPTION = `Welcome to ${FIRST_NAME}'s website!`

export const PROFILE = {
  title: 'Software Engineer',
  location: 'Tokyo, Japan',
  tagline: 'Make it worthwhile.'
}

export const ABOUT = {
  intro: `Hey there! I'm ${FIRST_NAME}.`,
  paragraphs: [
    "I'm currently building ",
    'I have 10+ years of experience building software across various industries.',
    'I enjoy turning ambiguous problems into shipped systems, collaborating closely with product and customer teams.'
  ],
  cta: {
    label: 'next generation music creation tools',
    href: 'https://soundraw.io/edit_music'
  },
  suffix: ' with the help of AI.'
}
