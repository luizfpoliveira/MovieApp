import { fetchMovie } from "@/api/movies";
import { addMovieToWatchlist } from "@/api/watchlist";
import { FontAwesome } from "@expo/vector-icons";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, Image, Pressable } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovie(id),
  });

  const { mutate } = useMutation({
    mutationFn: () => addMovieToWatchlist(id),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: movie.title }} />
      <Image
        source={{ uri: `http://image.tmdb.org/t/p/w500` + movie.backdrop_path }}
        style={{ width: "100%", height: 300 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "500", marginVertical: 10 }}>
          {movie.title}
        </Text>
        <View>
          <Pressable
            onPress={() => mutate()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginVertical: 10,
            }}
          >
            <FontAwesome name="bookmark-o" size={24} color={"black"} />
            <Text>Add to WatchList</Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
