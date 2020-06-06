import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Item, Label, Dimmer, Loader, Header, Divider } from 'semantic-ui-react';
import { StoreState } from '../../../store/entities/coreStore';
import { getNews } from '../../../store/news/news.selector';
import { NewsState } from '../../../store/entities/news';
import { addNews } from '../../../store/news/news.slice';
import { initNews } from '../../../store/news/news.thunk';

export interface NewsPageProps {
	news: NewsState[];
	addNews: (data: NewsState[]) => void;
	initNews: () => void;
}

const renderCard = (news: NewsState) => {
	const { source, author, title, description, url, urlToImage, publishedAt, content } = news;
	return (
		<React.Fragment>
			<Item.Group divided>
				<Item>
					<Item.Image src={news.urlToImage} />

					<Item.Content>
						<Item.Header as="a">{title}</Item.Header>
						<Item.Meta>
							<span className="cinema">{author}</span>
						</Item.Meta>
						<Item.Description>{description}</Item.Description>
						<Item.Extra>
							<Label>{publishedAt}</Label>
							<Label icon="globe" content="en" />
						</Item.Extra>
					</Item.Content>
				</Item>
			</Item.Group>
			<Divider />
		</React.Fragment>
	);
};

export class News extends React.PureComponent<NewsPageProps> {
	async componentDidMount() {
		this.props.initNews();
	}

	render() {
		const { news } = this.props;

		return (
			<div>
				<Header as="h2">Last News</Header>
				<Divider />
				{news.length ? (
					news.map((item) => {
						return renderCard(item);
					})
				) : (
					<Dimmer active inverted>
						<Loader inverted>Loading</Loader>
					</Dimmer>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addNews: (data: NewsState[]) => dispatch(addNews(data)),
	initNews: () => initNews(dispatch)
});

const mapStateToProps = (state: StoreState) => ({
	news: getNews(state)
});

export const NewsPage = connect(mapStateToProps, mapDispatchToProps)(News);
