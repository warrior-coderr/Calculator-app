import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#09090b", // deep blue background
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 200, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#ffffff" },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: { default: OutMode.out },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: { enable: true },
                    value: 100,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" }, // could also be "triangle", "polygon"
                size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
        }),
        []
    );

    if (!init) return <></>;

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
};

export default Background;
