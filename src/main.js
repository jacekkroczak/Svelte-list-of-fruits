import App from './App.svelte';
// import JkListItem from './JkListItem.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

// const jkListItem = new JkListItem([
//     {  name: 'Apple' },
//     {  name: 'Banana' },
//     {  name: 'Cherry' },
//     {  name: 'Coconut' },
//     {  name: 'Cranberry' },
//     {  name: 'Strawberry' },
//     {  name: 'Lemon' },
//     {  name: 'Mango' },
//     {  name: 'Watermelon' },
//     {  name: 'Yuzu' },
// ]);

export default app;
// export default jkListItem;