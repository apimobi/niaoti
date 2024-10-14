import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import MyDialog from "../components/dialog/DialogManager";
import { useState } from "react";
import { DialogProvider } from "@/context/DialogContext";

const LayoutContainer = () => {

    return (
        <DialogProvider>
            <div className="bg-errie-black min-h-screen">
                <ScrollToHashElement behavior="smooth" />
                <Header />
                <main className="relative z-0">
                    <Outlet />
                </main>
                <Footer />
            </div>
            <MyDialog />
        </DialogProvider>
    );
}

export default LayoutContainer;