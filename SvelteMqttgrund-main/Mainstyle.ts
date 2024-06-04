
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const main_style: CustomThemeConfig = {
    name: 'Mainstyle',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #a114ff 
		"--color-primary-50": "241 220 255", // #f1dcff
		"--color-primary-100": "236 208 255", // #ecd0ff
		"--color-primary-200": "232 196 255", // #e8c4ff
		"--color-primary-300": "217 161 255", // #d9a1ff
		"--color-primary-400": "189 91 255", // #bd5bff
		"--color-primary-500": "161 20 255", // #a114ff
		"--color-primary-600": "145 18 230", // #9112e6
		"--color-primary-700": "121 15 191", // #790fbf
		"--color-primary-800": "97 12 153", // #610c99
		"--color-primary-900": "79 10 125", // #4f0a7d
		// secondary | #9b1ebe 
		"--color-secondary-50": "240 221 245", // #f0ddf5
		"--color-secondary-100": "235 210 242", // #ebd2f2
		"--color-secondary-200": "230 199 239", // #e6c7ef
		"--color-secondary-300": "215 165 229", // #d7a5e5
		"--color-secondary-400": "185 98 210", // #b962d2
		"--color-secondary-500": "155 30 190", // #9b1ebe
		"--color-secondary-600": "140 27 171", // #8c1bab
		"--color-secondary-700": "116 23 143", // #74178f
		"--color-secondary-800": "93 18 114", // #5d1272
		"--color-secondary-900": "76 15 93", // #4c0f5d
		// tertiary | #e40de7 
		"--color-tertiary-50": "251 219 251", // #fbdbfb
		"--color-tertiary-100": "250 207 250", // #facffa
		"--color-tertiary-200": "248 195 249", // #f8c3f9
		"--color-tertiary-300": "244 158 245", // #f49ef5
		"--color-tertiary-400": "236 86 238", // #ec56ee
		"--color-tertiary-500": "228 13 231", // #e40de7
		"--color-tertiary-600": "205 12 208", // #cd0cd0
		"--color-tertiary-700": "171 10 173", // #ab0aad
		"--color-tertiary-800": "137 8 139", // #89088b
		"--color-tertiary-900": "112 6 113", // #700671
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #c60636 
		"--color-warning-50": "246 218 225", // #f6dae1
		"--color-warning-100": "244 205 215", // #f4cdd7
		"--color-warning-200": "241 193 205", // #f1c1cd
		"--color-warning-300": "232 155 175", // #e89baf
		"--color-warning-400": "215 81 114", // #d75172
		"--color-warning-500": "198 6 54", // #c60636
		"--color-warning-600": "178 5 49", // #b20531
		"--color-warning-700": "149 5 41", // #950529
		"--color-warning-800": "119 4 32", // #770420
		"--color-warning-900": "97 3 26", // #61031a
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #361d4e 
		"--color-surface-50": "225 221 228", // #e1dde4
		"--color-surface-100": "215 210 220", // #d7d2dc
		"--color-surface-200": "205 199 211", // #cdc7d3
		"--color-surface-300": "175 165 184", // #afa5b8
		"--color-surface-400": "114 97 131", // #726183
		"--color-surface-500": "54 29 78", // #361d4e
		"--color-surface-600": "49 26 70", // #311a46
		"--color-surface-700": "41 22 59", // #29163b
		"--color-surface-800": "32 17 47", // #20112f
		"--color-surface-900": "26 14 38", // #1a0e26
		
	}
}