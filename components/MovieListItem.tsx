import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MovieListItem = ({ movie }) => {
  return (
    <Link href={`/${movie.id}`} asChild>
      <Pressable style={{ flex: 1 }}>
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w500` + movie.poster_path,
          }}
          style={{ width: "100%", aspectRatio: 3 / 5, borderRadius: 20 }}
        />
      </Pressable>
    </Link>
  );
};

export default MovieListItem;
