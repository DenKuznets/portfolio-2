import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import NavBar from '@/components/NavBar/NavBar';
import Section from '@/components/Section/Section';
import text from '@/utils/text';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="pt-8 flex flex-col">
                {/* <Hero />
                <h2 className='text-3xl font-bold text-center my-14'>{text.header.nav.work}</h2>
                <Section className='bg-violet text-white' projectId={1} />
                <Section projectId={2} />
                <Section projectId={3} /> */}
            </main>
        </div>
    );
}
