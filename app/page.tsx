import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import text from '@/utils/text';

export default function Home() {
    return (
        <>
            <Header />
            <main className=" uhd:max-w-[1920px] mx-auto pt-8 flex flex-col">
                <Hero />
                <h2
                    id="examples"
                    className="container font-bold text-center mt-4 sm:mt-8 underline py-10 text-3xl sm:text-4xl"
                >
                    {text.examples}
                </h2>
                <Section className="bg-violet text-white" projectId={1} />
                <Section projectId={2} />
                <Section className="bg-customYellow" projectId={3} />
            </main>
        </>
    );
}
