import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.scss',
                'resources/css/dark.scss',
                'resources/css/fonts.scss',
                'resources/css/gird.scss',
                'resources/css/light.scss',
                'resources/css/typography.scss',

                'resources/ts/app.ts'
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                },
            }
        })
    ],
    resolve: {
        alias: {
            "@/": path.join(__dirname, "/resource/ts"),
            "~": path.join(__dirname, "/node_modules"),
        }
    }
});
