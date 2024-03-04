export const runAssertions = async (Comment, Movie) => {
  console.assert(Comment && Movie, 'Should have both models defined', Comment, Movie);

  const movie = await Movie.findOne({ title: 'Fight Club'}).exec();
  console.assert(movie, 'Should find "Fight Club" movie', movie);

  if (movie) {
    await movie.remove();
  }

  const movieThatShouldNotExist = await Movie.findOne({ title: 'Fight Club'}).exec();
  console.assert(!movieThatShouldNotExist, 'Movie should be removed', movieThatShouldNotExist);

  const relatedComments = await Comment.find({ _id: { $in:  ['789789789789789789789789', '321321321321321321321321'] }});
  console.assert(relatedComments && relatedComments.length === 0,
    'Should not have any related comments in the database', relatedComments);
};
