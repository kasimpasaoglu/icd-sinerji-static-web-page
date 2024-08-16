"use client"

import React, { ReactNode, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { useIntersection } from '@mantine/hooks';

interface AnimatedSectionProps {
    className?: string;
    children?: ReactNode;
    from?: "top" | "bottom" | "left" | "right";
    duration?: number;
    show?: boolean
    shouldShowInView?: boolean
    hFull?: boolean
}

const AnimatedSection = ({
    className,
    children,
    from = "top",
    duration = 300,
    show = false,
    shouldShowInView = false,
    hFull = false
}: AnimatedSectionProps) => {

    const { ref, entry } = useIntersection({
        threshold: 0.5
    });

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        if (entry?.isIntersecting && shouldShowInView) {
            setOpen(true)
        }
    }, [entry, shouldShowInView])

    useEffect(() => {
        setOpen(show)
    }, [show])

    const transitions = {
        'top': {
            enterFrom: "-translate-y-5 opacity-0",
            enterTo: "translate-y-0 opacity-100",
            leaveFrom: "translate-y-0 opacity-100",
            leaveTo: "-translate-y-5 opacity-0",
            general: `transition ease-out transform`
        },
        'bottom': {
            enterFrom: "translate-y-40 opacity-0",
            enterTo: "translate-y-0 opacity-100",
            leaveFrom: "translate-y-0 opacity-100",
            leaveTo: "translate-y-40 opacity-0",
            general: `transition ease-out transform`
        },
        'left': {
            enterFrom: "-translate-x-40 opacity-0",
            enterTo: "translate-x-0 opacity-100",
            leaveFrom: "translate-x-0 opacity-100",
            leaveTo: "-translate-x-40 opacity-0",
            general: `transition ease-out transform`
        },
        'right': {
            enterFrom: "translate-x-40 opacity-0",
            enterTo: "translate-x-0 opacity-100",
            leaveFrom: "translate-x-0 opacity-100",
            leaveTo: "translate-x-40 opacity-0",
            general: `transition ease-out transform`
        }
    };

    return (
        <div ref={ref} className={clsx(hFull && 'h-full')}>
            <Transition
                as="div"
                show={open}
                appear={true}
                unmount={false}
                className={className}
                style={{ transitionDuration: `${duration}ms` }}
                enter={clsx(transitions[from].general)}
                enterFrom={transitions[from].enterFrom}
                enterTo={transitions[from].enterTo}
                leave={clsx(transitions[from].general)}
                leaveFrom={transitions[from].leaveFrom}
                leaveTo={transitions[from].leaveTo}
            >
                {children}
            </Transition>
        </div>
    )
}

export default AnimatedSection;
