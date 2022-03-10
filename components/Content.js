import Thumbnail from "./Thumbnail";

function Content({ results }) {
	return (
		<div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 xxl:flex flex-wrap justify-center">
			{results.map((result) => (
				<Thumbnail key={result.id} result={result} />
			))}
		</div>
	);
}

export default Content;
