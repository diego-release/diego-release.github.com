import { Episode } from "../../Components/Podcast/Episode/Episode";

export const ScreenPodcast = () => {
   const commentsOne = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ;",
      "Minus inventore dolorem architecto quas quam sunt quo dolor!  ;",
      "Eius, dolorem veniam rerum, sint, necessitatibus nemo numquam non a voluptates distinctio labore. ;",
      "Dolor quam vel porro, cum blanditiis minus asperiores est eos deleniti nam cumque saepe? ;",
      "Fuga, similique. Molestias dolore voluptatum adipisci minima est! ;",
      "Aut nisi quia numquam maiores rerum voluptates hic ullam, fuga fugit in. ;",
      "labore unde corporis eum, voluptas ea et possimus odio sapiente! ;",
      "Iusto illum obcaecati at reprehenderit corrupti, nobis nulla. ;",
   ];
   const commentsTwo = [
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
      "🔴Red... ",
   ];

   const usersOne = ["diego_release", "starboy69"];

   const usersTwo = ["diego_release"];

   return (
      <>
         <Episode
            title={"personal brand"}
            comments={commentsOne}
            users={usersOne}
         />
         <Episode
            stateEpisode={false}
            title={"music is life"}
            comments={commentsTwo}
            users={usersTwo}
         />
      </>
   );
};
