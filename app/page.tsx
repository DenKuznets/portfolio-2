import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import NavBar from '@/components/NavBar/NavBar';
import Section from '@/components/Section/Section';
import text from '@/utils/text';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-8 flex flex-col">
                <Hero/>
                <h2 className='font-bold text-center my-14 bg-violet text-white py-10'>{text.examples}</h2>
                {/* 
                <Section className='bg-violet text-white' projectId={1} />
                <Section projectId={2} />
                <Section projectId={3} /> */}
            </main>
        </>
    );
}
