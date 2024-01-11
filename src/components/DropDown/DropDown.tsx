import { useId, useState } from 'react';
import {
    useFocus,
    useDismiss,
    autoUpdate,
    offset,
    flip,
    shift,
    useFloating,
    useClick,
    useInteractions,
    useRole,
} from '@floating-ui/react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    renderPopover: React.ReactNode;
    classNameWrapper?: string;
    classNameRender?: string;
    isNotify?: boolean;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown = ({
    children,
    classNameWrapper,
    renderPopover,
    classNameRender,
    isNotify,
    isOpen,
    setIsOpen,
}: Props) => {
    // const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });
    const click = useClick(context);
    const role = useRole(context);
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);
    const animationNotify: Variants = {
        open: {
            x: '0%',
        },
        closed: { x: '100%' },
    };
    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={'closed'}
                        animate={'open'}
                        exit={'closed'}
                        variants={isNotify ? animationNotify : {}}
                        transition={{
                            duration: 0.5,
                        }}
                        className={classNameRender}
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                        {renderPopover}
                    </motion.div>
                )}
            </AnimatePresence>
            <div ref={refs.setReference} {...getReferenceProps()} className={classNameWrapper}>
                {children}
            </div>
        </div>
    );
};

export default DropDown;
