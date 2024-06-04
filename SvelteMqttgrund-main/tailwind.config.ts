import { join } from 'path'
import type { Config } from 'tailwindcss'
import {main_style} from "./Mainstyle"
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					main_style
				]
			}
		})
	],
} satisfies Config;
