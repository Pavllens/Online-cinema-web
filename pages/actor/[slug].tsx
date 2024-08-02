import Catalog from '@/components/screens/templates/catalog-movies/Catalog'


import { IActor,  IMovie } from '@/shared/types/movie.types'
import { NextPage , GetStaticProps, GetStaticPaths} from 'next'
import Error404 from '../404'
import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'


interface IActorPage{
	movies : IMovie[]
	actor : IActor
}


const ActorPage : NextPage<IActorPage> = ({movies, actor}) => {
	return actor? (
		<Catalog
			movies={ movies || []}
			title={actor.name}
		/>
	):  <Error404/>
}

export const getStaticPaths: GetStaticPaths = async ( ) => {
	try {
		const { data:actors} = await ActorService.getAll()

		const paths = actors.map (a =>({
			params:{slug: a.slug}
		}))
		return {
			paths,
			fallback: 'blocking'
		}

	} catch (error) {
		return{
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({params}) =>{
	try {

		const { data:actor} = await ActorService.getBySlug(String(params?.slug))

		const {data: movies} = await MovieService.getByActor(actor._id)

		return {
			props: {
				movies,
				actor
			}
		}
	}
	catch (error) {
		return {
			notFound: true ,
		}
	}
}
export default ActorPage