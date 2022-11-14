import React, { useState, useEffect } from "react";
import { Share, SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { HomeHeader } from "../../components";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);

    return (
      <>
      <HomeHeader />
      <Posts setCurrentId={setCurrentId} />
      </>
    );
};

export default Home;