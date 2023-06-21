export default (ctx) => {
//   console.log(`${ctx.env === 'production' ? 'compiling' : 'watching'}:`);
//   console.log(ctx.file.basename);

  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
}
