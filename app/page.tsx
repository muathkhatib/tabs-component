import Image from "next/image";
import styles from "./page.module.css";
import TabsNavigator, { Tab, TabPanel } from "@/components/TabsNavigator";

import axios from "axios";

import Joke from "./components/Joke";

export default async function Home() {
  const { data: catApiResponse } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.API_KEY}&limit=10`
  );

  const { data: dogApiResponse } = await axios.get(
    `https://api.thedogapi.com/v1/images/search?api_key=${process.env.API_KEY}&limit=10`
  );

  const { data: jokesApiResponse } = await axios.get(
    "https://v2.jokeapi.dev/joke/Any?amount=10"
  );

  return (
    <main className={styles.main}>
      <div className={styles.tabsContainer}>
        <TabsNavigator>
          <Tab>Cats API</Tab>
          <Tab>Jokes API</Tab>
          <Tab>Dogs API</Tab>

          <TabPanel>
            {catApiResponse.map((item: any, index: number) => (
              <div
                key={`${item.id} - ${index}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <Image
                  src={item.url}
                  style={{ objectFit: "contain" }}
                  width={300}
                  height={300}
                  alt={item.id}
                />
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {jokesApiResponse.jokes.map((item: any, index: number) => (
              <div key={index}>
                <Joke joke={item} />
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {dogApiResponse.map((item: any, index: number) => (
              <div
                key={`${item.id} - ${index}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <Image
                  src={item.url}
                  style={{ objectFit: "contain" }}
                  width={300}
                  height={300}
                  alt={item.id}
                />
              </div>
            ))}
          </TabPanel>
        </TabsNavigator>
      </div>
    </main>
  );
}
